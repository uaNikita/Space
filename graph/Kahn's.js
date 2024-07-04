const findOrder = (num, prerequisites) => {
    const inDegree = Array(num).fill(0);
    const graph = new Map();

    for (const [to, from] of prerequisites) {
        inDegree[to]++;

        const list = graph.get(from) || [];
        list.push(to);
        graph.set(from, list);
    }

    const queue = [];

    for (let i = 0; i < inDegree.length; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }

    const output = [];

    while (queue.length) {
        const vertex = queue.shift();

        output.push(vertex);

        for (const to of graph.get(vertex) || []) {
            inDegree[to]--;

            if (inDegree[to] === 0) {
                queue.push(to);
            }
        }
    }

    return output.length === num ? output : [];
};

const list = [
    [4, [[1, 0], [2, 0], [3, 1], [3, 2]]],
    [1, []],
].map(([nums, prerequisites]) => ({
    nums,
    prerequisites: JSON.stringify(prerequisites),
    output: JSON.stringify(findOrder(nums, prerequisites)),
}));

console.table(list);
