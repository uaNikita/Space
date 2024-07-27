// Improved Bellman-Ford with Queue is SPFA algorithm

const spfa = (n, src, edges) => {
    const graph = new Map();

    console.log(edges)

    for (const [a, b, weight] of edges) {
        (graph.get(a) || graph.set(a, []).get(a)).push([b, weight]);
        (graph.get(b) || graph.set(b, []).get(b)).push([a, weight]);
    }

    const distribution = Array(n).fill(Infinity);
    const inQueue = new Set();
    const queue = [];

    distribution[src] = 0;
    queue.push(src);
    inQueue.add(src);

    while (0 < queue.length) {
        const vertex = queue.shift();
        inQueue.delete(vertex);

        for (const [neighbor, weight] of graph.get(vertex) || []) {
            const newWeight = distribution[vertex] + weight;

            if (newWeight < distribution[neighbor]) {
                distribution[neighbor] = newWeight;

                if (!inQueue.has(neighbor)) {
                    queue.push(neighbor);
                    inQueue.add(neighbor);
                }
            }
        }
    }

    return distribution;
};

const list = [
    [4, 0, [[0,1,3],[1,2,1],[1,3,4],[2,3,1]]],
    [5, 0, [[0,1,2],[0,4,8],[1,2,3],[1,4,2],[2,3,1],[3,4,1]]],
].map(([n, src, edges]) => ({
    n,
    src,
    edges: JSON.stringify(edges),
    output: JSON.stringify(spfa(n, src, edges)),
}));

console.table(list);


