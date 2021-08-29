export function addItem(val: any) {
  const node = document.createElement('li')
  const textnode = document.createTextNode(val)
  node.appendChild(textnode)
  document.querySelector('#output')?.appendChild(node)
}
