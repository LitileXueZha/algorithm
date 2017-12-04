//  广度优先遍历
function levelOrderTraversal(node) {
  if (!node) {
    throw new Error('结束！节点为空');
  }

  const que = [];
  que.push(node);
  while (que.length !== 0) {
    const tempNode = que.shift();

    console.log(tempNode.value);
    if (tempNode.left) que.push(tempNode.left);
    if (tempNode.right) que.push(tempNode.right);
  }
}

const xhr = new XMLHttpRequest();

xhr.onReadyStateChange = () => {
  console.log(xhr.readyState, xhr.status);
};

xhr.open('tree.json', 'GET');
xhr.send();

const tree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
    },
  },
  right: {
    value: 3,
    left: {
      value: 5,
      left: {
        value: 7,
      },
      right: {
        value: 8,
      },
    },
    right: {
      value: 6,
    },
  },
};

levelOrderTraversal(tree);
