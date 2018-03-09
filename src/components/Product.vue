<template>
  <div class="section">
    <div class="container">
      <div class="columns" style="min-height: 800px">
        <div class="column is-6">
          <div class="image is-2by2">
            <img src="https://cdn.scotch.io/2842/b7yhhuUPSGO1fEkMHD6P_sticks.jpeg">
          </div>
        </div>
        <div class="column is-5 is-offset-1">
          <div class="title is-2">
            {{ productName }}
          </div>
          <p class="title is-3 has-text-muted">
            kr. {{ price }},-
          </p>
          <hr />
          <br />
          <p>
            {{ longDescription }}
          </p>
          <br />
          <br />
          <p class="level">
            <button
                class="snipcart-add-item button is-large is-primary ievel-item has-text-centered"
                v-bind:data-item-id="productId"
                v-bind:data-item-name="productName"
                v-bind:data-item-price="price"
                v-bind:data-item-weight="weight"
                data-item-url="/"
                v-bind:data-item-description="shortDescription">
                    Kjøp nå
            </button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      productId: 2,
      weight: 20,
      productName: 'Bundle of sticks',
      price: 15,
      longDescription: 'This bundle of sticks provides an earthy fragrance and aesthetic natural appeal. Your bundle of sticks will come with a personalized note. The perfect natural gift for any time of year!',
      shortDescription: 'Fresh sticks'
    }
  }
}
</script>
