const findFirstTagParentWithCssClass = (children, parentTagName, parentCssClass) => {
  if (children.parentNode.tagName === parentTagName 
      && children.parentNode.classList.contains(parentCssClass)) return children.parentNode;
  return findFirstTagParentWithCssClass(children.parentNode, parentTagName, parentCssClass);
}

export default findFirstTagParentWithCssClass;
