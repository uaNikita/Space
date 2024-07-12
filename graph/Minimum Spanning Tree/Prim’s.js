const prims = (n, edges) => {
    const graph = new Map();

    for (const [a, b, cost] of edges) {
        const mapA = graph.get(a) || graph.set(a, new Map()).get(a);
        mapA.set(b, cost);

        const mapB = graph.get(b) || graph.set(b, new Map()).get(b);
        mapB.set(a, cost);
    }

    const pq = new PriorityQueue({
        compare: ((a, b) => a[1] - b[1]),
    });

    for (const [vertex, cost] of graph.get(0)) {
        pq.enqueue([vertex, cost]);
    }

    const seen = new Set([0]);
    let verticesToConnect = n - 1;
    let output = 0;

    while (verticesToConnect) {
        const [vertex, cost] = pq.dequeue();

        if (seen.has(vertex)) {
            continue;
        }

        seen.add(vertex);
        output += cost;
        verticesToConnect--;

        for (const [neighbor, cost] of graph.get(vertex)) {
            pq.enqueue([neighbor, cost]);
        }
    }

    if (0 < verticesToConnect) {
        return -1;
    }

    return output;
}

const list = [
    [3, [[0, 1, 5], [0, 2, 10], [1, 2, 3]]],
    [4, [[0, 1, 1], [0, 2, 4], [1, 2, 2], [1, 3, 6], [2, 3, 3]]],
].map(([n, edges]) => ({
    n,
    edges: JSON.stringify(edges),
    output: prims(n, edges),
}));

console.table(list);
