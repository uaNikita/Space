/*
 * Definition for a binary tree node.
 */
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

/*
 * Encodes a tree to a single string.
 */

function serialize(root: TreeNode | null): string {
    const list: number[] = [];

    if (root) {
        const queue: TreeNode[] = [];
        queue.push(root);

        while (queue.length) {
            const node = queue.shift();

            if (node) {
                list.push(node.val);
                queue.push(node.left);
                queue.push(node.right);
            } else {
                list.push(null);
            }
        }
    }

    return JSON.stringify(list);
};

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
    const list = JSON.parse(data);

    if (!list.length) {
        return null;
    }

    const root = new TreeNode(list[0]);

    const queue: TreeNode[] = [];
    queue.push(root);

    for (let i = 1; i < list.length; i += 1) {
        const parent = queue.shift();

        if (list[i] !== null) {
            parent.left = new TreeNode(list[i]);
            queue.push(parent.left);
        }

        i += 1;

        if (i < list.length && list[i] !== null) {
            parent.right = new TreeNode(list[i]);
            queue.push(parent.right);
        }
    }

    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */