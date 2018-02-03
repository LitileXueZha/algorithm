const result = [];
const Deep = function Deep() {
  this.front = function front(node) {
    if (node) {
      result.push(node.value);
      front(node.left);
      front(node.right);
    }
  };

  //  中序遍历
  this.center = function center(node) {
    if (node) {
      center(node.left);
      result.push(node.value);
      center(node.right);
    }
  };

  //  后序遍历
  this.back = function back(node) {
    if (node) {
      back(node.left);
      back(node.right);
      result.push(node.value);
    }
  };
};

class DeepTra {
  static front(tree) {
    if (!tree) {
      return;
    }

    const stack = [tree];
    while (stack.length) {
      const node = stack.pop();
      result.push(node.value);
      if (node.right) stack.push(node.right);
      if (node.left) stack.push(node.left);
    }
  }

  static center(tree) {
    if (!tree) {
      return;
    }

    const stack = [];
    let node = tree;
    while (stack.length || node) {
      if (node) {
        stack.push(node);
        node = node.left;
      } else {
        node = stack.pop();
        result.push(node.value);
        node = node.right;
      }
    }
  }

  static back(tree) {
    if (!tree) {
      return;
    }

    const stack = [tree];
    let tmp = null;
    let node = tree;
    while (stack.length) {
      tmp = stack[stack.length - 1];
      if (tmp.left && node !== tmp.left && node !== tmp.right) {
        stack.push(tmp.left);
      } else if (tmp.right && node !== tmp.right) {
        stack.push(tmp.right);
      } else {
        result.push(stack.pop().value);
        node = tmp;
      }
    }
  }
}

class Morris {
  static front(tree) {
    if (!tree) {
      return;
    }

    let cur1 = tree;
    let cur2 = null;

    while (cur1) {
      cur2 = cur1.left;
      if (cur2) {
        while (cur2.right && cur2.right !== cur1) {
          cur2 = cur2.right;
        }

        if (!cur2.right) {
          cur2.right = cur1;
          result.push(cur1.value);
          cur1 = cur1.left;
          continue;
        } else {
          cur2.right = null;
        }
      } else {
        result.push(cur1.value);
      }

      cur1 = cur1.right;
    }
  }
}

const DeepTraversal = new Deep();

// DeepTraversal.front(tree);
Morris.front(tree);
console.log('Morris先序', ...result);
