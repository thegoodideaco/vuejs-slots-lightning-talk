

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({

  props: ['content'],
  render(h) {
    // const n = document.createElement('div')
    // tslint:disable-next-line:new-parens
    const parser = new DOMParser
    const doc = parser.parseFromString(this.content, 'text/html')


    // if (doc.body.textContent) {
    //   n.innerHTML = doc.body.innerHTML
    // }

    const childNode = doc.body.firstElementChild
    const innerText = childNode ? childNode.textContent : 'hey'
    const innerHTML = childNode ? childNode.innerHTML : ''
    const tagName = childNode ? childNode.tagName : 'div'

    const attrs: any = {}


    if (childNode && childNode.id) {
      attrs.id = childNode.id
      // Object.assign(attrs, childNode.attributes)
    }

    return h(tagName, {
      domProps: {
        innerHTML
      },
      attrs
    })
  }
})
</script>


<style>
</style>
