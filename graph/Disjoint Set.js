class UnionFind {
    vertices = []

    constructor(size) {
        for (let i = 0; i < size; i++) {
            this.vertices[i] = [i, 0];
        }
    }

    find(a) {
        if (this.vertices[a][0] === a) {
            return a;
        }

        return this.vertices[a][0] = this.find(this.vertices[a][0]);
    }

    union(a, b) {
        const { vertices } = this;
        const rootA = this.find(a);
        const rootB = this.find(b);

        if (rootA === rootB) {
            return false;
        }

        if (vertices[rootA] < vertices[rootB]) {
            vertices[rootA][0] = vertices[rootB][0];
        } else if (vertices[rootB] < vertices[rootA]) {
            vertices[rootB][0] = vertices[rootA][0];
        } else {
            vertices[rootB][0] = vertices[rootA][0];
            vertices[rootA][1]++;
        }

        return true;
    }

    connected(a, b) {
        return this.find(a) === this.find(b);
    }
}
