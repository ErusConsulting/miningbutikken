<template>

    <div class="navbar-item has-dropdown is-hoverable snipcart-summary">
      <a class="navbar-link">Handlekurv &nbsp;<span class="snipcart-total-items tag is-info"></span></a>

      <div class="navbar-dropdown">
          <div class="navbar-item">
            <span class="snipcart-total-items"></span> &nbsp;vare i handlekurven:&nbsp;
            <span class="snipcart-total-price tag"></span>
          </div>

          <div class="navbar-item">
            <a href="#" class="snipcart-checkout">Gå til betaling</a>
          </div>

      </div>
    </div>
</template>

<script>
export default {
}
</script>
