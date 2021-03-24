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
    return JSON.stringify(helperSerialize(root, []));
};

function helperSerialize(root: TreeNode | null, list: (null | number)[]): (null | number)[] {
    if (root) {
        list.push(root.val);
        helperSerialize(root.left, list);
        helperSerialize(root.right, list);
    } else {
        list.push(null);
    }

    return list;
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
    const list = JSON.parse(data);

    return helperDeserialize(list);
};

function helperDeserialize(list: (null | number)[]): TreeNode | null {
    const val: null | number = list[0];

    list.splice(0, 1);

    if (val === null) {
        return null;
    }

    const root = new TreeNode(
        val,
        helperDeserialize(list),
        helperDeserialize(list),
    );

    return root;
}