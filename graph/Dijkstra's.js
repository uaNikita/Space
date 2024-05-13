const dijkstra = (edges, n, src) => {
    const graph = {};

    for (const [a, b, weight] of edges) {
        (graph[a] = graph[a] || []).push([b, weight]);
        (graph[b] = graph[b] || []).push([a, weight]);
    }

    const distances = new Array(n).fill(Infinity);
    distances[src] = 0;

    const pq = new PriorityQueue({
        compare: (a, b) => a[1] - b[1],
    });
    const seen = new Set();

    pq.enqueue([src, 0]);

    while (pq.size()) {
        const [node, distance] = pq.dequeue();

        seen.add(node);

        for (const [neighbor, neighborDistance] of graph[node]) {
            const newDistance = distance + neighborDistance;

            if (newDistance < distances[neighbor]) {
                distances[neighbor] = newDistance;

                if (!seen.has(neighbor)) {
                    pq.enqueue([neighbor, newDistance]);
                }
            }
        }
    }

    return distances;
};

[
    [[[1,0,0],[1,2,0],[2,3,0]], 4, 1],
    [[[0,1,0]], 2, 1],
].forEach(args => {
    console.log(...args, dijkstra(...args));
});
