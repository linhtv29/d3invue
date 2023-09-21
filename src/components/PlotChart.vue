<template>
	<div class="relative w-full" ref="resizeRef" id="chart-container">
		<svg ref="svgRef">
		</svg>
		<div id="tooltip" class="absolute z-10 p-2 bg-white border border-gray-500 opacity-0 w-max ">
			<div class="mb-2 text-base">{{ schoolDetails.name }}</div>
			<div class="flex mb-2 text-xs">
				<div class="text-gray-500">
					{{ `SAGE ${schoolDetails.type} Proficiency:` }}
				</div>
				<div>{{ schoolDetails.proficiency }}%</div>
			</div>
			<div class="flex mb-1 text-xs">
				<div class="text-gray-500">
					Spending per ADM:$
				</div>
				<div>{{ schoolDetails.fee }}</div>
			</div>
			<div class="flex mb-1 text-xs">
				<div class="text-gray-500">
					Low income Students:
				</div>
				<div>{{ schoolDetails.lowIncome }}%</div>
			</div>
			<div class="flex mb-1 text-xs">
				<div class="text-gray-500">
					Students with Disabilities:
				</div>
				<div>{{ schoolDetails.disabilities }}%</div>
			</div>
			<div class="flex mb-1 text-xs">
				<div class="text-gray-500">
					ELL Students:
				</div>
				<div>{{ schoolDetails.ell }}%</div>
			</div>
		</div>
	</div>
</template>
<script setup>
import { ref, onMounted, watchEffect, toRef, reactive } from "vue";
import * as d3 from "d3"
import useResizeObserver from "../use/resizeObserver.js";


const props = defineProps({
	data: Object
})

const emit = defineEmits(["updateTarget"])

const data = toRef(props, "data")

const schoolDetails = reactive({
	name: "",
	type: "",
	proficiency: "",
	students: "",
	lea: "",
	fee: "",
	disabilities: "",
	ell: "",
	lowIncome: ""
})

const svgRef = ref(null)
const { resizeRef, resizeState } = useResizeObserver();
const margin = { top: 10, right: 0, bottom: 30, left: 40 };
const pallete = ['#ff9d9a', '#fad3ad', '#d4a6c8', '#499894', '#8cd17d', '#f28e2b', '#d8d2cf']
onMounted(() => {
	const svg = d3.select(svgRef.value)
	const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);
	const tooltip = d3.select('#tooltip')
	resetTargetVal();

	watchEffect(() => {
		g.selectAll('*').remove()
		const { width, height } = resizeState.dimensions
		svg.attr("width", width).attr("height", height)
		const cWidth = width - margin.left - margin.right
		const cHeight = height - margin.top - margin.bottom
		const xScale = d3.scaleLinear().domain([d3.min(data.value, d => d.fee), d3.max(data.value, d => d.fee)]).range([0, cWidth]);
		const yScale = d3.scaleLinear().domain([d3.min(data.value, d => d.proficiency), d3.max(data.value, d => d.proficiency)]).range([cHeight, 0]);
		const xAvg = d3.mean(data.value, d => d.fee)
		const yAvg = d3.mean(data.value, d => d.proficiency)
		const xRuler = g.append('g')
		const yRuler = g.append('g')
		const nameAnchor = g.append('text').style('opacity', 0).attr('x', -100).attr('y', -100).attr('fill', '#555').style('font-size', 12).style("text-anchor", "middle")

		drawAxis();
		drawRuler();
		drawPlot();
		function drawRuler() {
			xRuler.append('line').attr('x1', xScale(xAvg)).attr('y1', cHeight).attr('x2', xScale(xAvg)).attr('y2', 0)
				.attr('stroke', '#555')
				.style("stroke-width", 2)
			xRuler.append('text').text('StateWide Average').attr('x', xScale(xAvg) + 4).attr('y', cHeight - 5).attr('fill', '#555').style('font-size', 12)
			yRuler.append('line').attr('x1', 0).attr('y1', yScale(yAvg)).attr('x2', cWidth).attr('y2', yScale(yAvg))
				.attr('stroke', '#555')
				.style("stroke-width", 2)
			yRuler.append('text').text('StateWide Average').attr('x', cWidth - 110).attr('y', yScale(yAvg) - 4).attr('fill', '#555').style('font-size', 12)
		}
		function drawAxis() {
			g.append('g')
				.attr('transform', `translate(0,${cHeight})`)
				.call(d3.axisBottom(xScale).tickFormat(d => '$' + d));

			g.append('g')
				.call(d3.axisLeft(yScale).tickFormat(d => d + "%"));
		}

		function drawPlot() {
			g.selectAll('circle')
				.data(data.value)
				.join('circle')
				.attr('cx', d => xScale(d.fee))
				.attr('cy', d => yScale(d.proficiency))
				.attr('r', 5)
				.attr('fill', (d, i) => fillColor(i))
				.style("outline-style", "none")
				.on("mouseover", mouseover)
				.on("mousemove", mousemove)
				.on("mouseout", mouseleave)
				.on("click", mouseClick)
				.on("blur", resetClick);

			function fillColor(idx) {
				return pallete[idx % pallete.length]
			}
		}
		function mouseover(event, d) {
			d3.select(this).style("cursor", "pointer");
			schoolDetails.name = d.name
			schoolDetails.fee = d.fee
			schoolDetails.disabilities = d.disabilities
			schoolDetails.ell = d.ell
			schoolDetails.type = d.type
			schoolDetails.proficiency = d.proficiency
			schoolDetails.lowIncome = d.lowIncome
			tooltip
				.style("opacity", 1)
		}

		function mousemove(event, d) {
			tooltip
				.style("left", (event.offsetX + 15) + "px")
				.style("top", (event.offsetY + 15) + "px")
		}

		function mouseleave(event, d) {
			d3.select(this).style("cursor", "default");
			tooltip
				.transition()
				.duration(200)
				.style("opacity", 0)
				.duration(0)
				.style("left", (-event.offsetX) + "px")
				.style("top", (-event.offsetY) + "px")
		}

		function mouseClick(event, d) {
			resetClick();
			updateTargetVal(d)
			g.selectAll("circle").style("stroke-width", 0).style("opacity", 0.2)
			d3.select(this)
				.style("stroke", "gray")
				.style("stroke-width", 2)
				.style("opacity", 1);
			nameAnchor.text(d.name).attr('x', xScale(d.fee)).attr('y', yScale(d.proficiency) + 20).style("opacity", 1)
		}
		function resetClick() {
			resetTargetVal();
			g.selectAll("circle").style("stroke-width", 0).style("opacity", 1)
			nameAnchor.attr('x', -100).attr('y', -100).style("opacity", 0)
		}

		function updateTargetVal(d) {
			const data = {
				name: d.name,
				lowIncome: d.lowIncome,
				disabilities: d.disabilities,
				ell: d.ell
			}
			emit("updateTarget", data)
		}
	})

	function resetTargetVal() {
		const eData = {
			name: "All",
			lowIncome: d3.mean(data.value, d => d.lowIncome),
			disabilities: d3.mean(data.value, d => d.disabilities),
			ell: d3.mean(data.value, d => d.ell)
		}
		emit("updateTarget", eData)
	}
})

</script>