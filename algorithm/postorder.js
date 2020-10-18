function preorder(root) {
  if (!root) {
    return;
  }
  console.log("当前遍历的节点值为 :>> ", root.val);
  preorder(root.left);
  preorder(root.left);
}
function inorder(root) {
  if (!root) {
    return;
  }
  // 递归遍历左子树
  inorder(root.left);
  console.log("当前遍历的节点值为 :>> ", root.val);
  // 递归遍历右子树
  inorder(root.right);
}
function postorder(root) {
  // 递归边界 root 为空
  if (!root) {
    return;
  }
  //递归遍历左子树
  postorder(root.left);
  //递归遍历右子树

  postorder(root.right);
  console.log("当前遍历的节点值为 :>> ", root.val);
}
