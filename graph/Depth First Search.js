// Traverse all vertices in a “graph”;
// Traverse all paths between any two vertices in a “graph”.

const dfs = (n, edges, source, destination) => {
    const graph = {};

    for (const [a, b] of edges) {
        (graph[a] = graph[a] || []).push(b);
        (graph[b] = graph[b] || []).push(a);
    }

    const stack = [source];
    const seen = new Set();

    while (stack.length) {
        const vertex = stack.pop();

        if (vertex === destination) {
            return true;
        }

        seen.add(vertex);

        for (const neighbor of graph[vertex]) {
            if (!seen.has(neighbor)) {
                stack.push(neighbor);
            }
        }
    }

    return false;
};

[
    [3, [[0,1],[1,2],[2,0]], 0, 2],
    [6, [[0,1],[0,2],[3,5],[5,4],[4,3]], 0, 5],
].forEach(args => {
    console.log(...args, dfs(...args));
});
