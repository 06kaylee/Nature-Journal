<template>
    <div class="content">
        <div class="columns">
            <div class="column">
                <h1 class="title is-1">Technology Used</h1>
                <div class="columns">
                    <div class="column is-6 p-col">
                        <h3 class="subtitle is-3">XHTML</h3>
                        <p>HTML pages conform to XHTML rules/guidelines</p>

                        <h3 class="subtitle is-3">HTML5</h3>
                        <p>All HTML pages use HTMl5</p>

                        <h3 class="subtitle is-3">HTML5 Canvas</h3>
                        <button @click="changeVisibility">Change Visibility</button>
                        <div id="canvas-container">
                            <canvas id="myCanvas" width="560" height="360" style="border:1px solid #000000;"></canvas>
                        </div>

                        <h3 class="subtitle is-3">HTML5 Video</h3>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/pmAbh5ZkDEo" title="YouTube video player" frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                        <h3 class="subtitle is-3">CSS</h3>
                        <p>On every Vue page I am using css.</p>

                        <h3 class="subtitle is-3">Javascript</h3>
                        <p>Most Vue pages use javascript to send requests to the backend and sets the value of an object to the response of that request.</p>

                        <h3 class="subtitle is-3">Dynamic Javascript</h3>
                        <p>Changing visibility of the canvas on this page.</p>

                        <h3 class="subtitle is-3">PHP</h3>
                        <p>HTML pages conform to XHTML rules/guidelines</p>

                        <h3 class="subtitle is-3">Database</h3>
                        <p>I'm using MongoDB. </p>

                        <h3 class="subtitle is-3">SVG Logo</h3>
                        <p>The SVG Logo is in my navigation bar component. </p>

                        <h3 class="subtitle is-3">Webserver</h3>
                        <p>I'm using node/express as my webserver.</p>

                        <h3 class="subtitle is-3">XHTML Validation</h3>
                        <p>I have validated all of my Vue pages that contain HTML.</p>
                    </div>
                </div>
            </div>   
        </div>
    </div>
</template>

<script>
export default {
    name: 'TechUsed',
    methods: {
        changeVisibility() {
            const canvasDiv = document.getElementById("canvas-container");
            if (canvasDiv.style.display === "none") {
                canvasDiv.style.display = "block";
            } 
            else {
                canvasDiv.style.display = "none";
            }
        }
    },
}
</script>

<style scoped>
    .title {
        margin-top: 1em;
    }
</style>