//  广度优先遍历
const resultLevel = [];
function levelOrderTraversal(node) {
  if (!node) {
    throw new Error('结束！节点为空');
  }

  const que = [];
  que.push(node);
  while (que.length !== 0) {
    const tempNode = que.shift();

    resultLevel.push(tempNode.value);
    if (tempNode.left) que.push(tempNode.left);
    if (tempNode.right) que.push(tempNode.right);
  }
}

levelOrderTraversal(tree);
console.log('广度', ...resultLevel);
