<template lang="pug">
.pagination-wrap
  .pagination
    .pagination-prev(
      :class="{ disable: current == 1 }",
      @click="onClick(current - 1)"
    )
      SIcon(name="chevron_left")
      
    template(v-if="!range.includes(1)")
      .pagination-first(:class="{ disable: current == 1 }", @click="onClick(1)") 1
      .pagination-dots
        SIcon(name="more_horiz")
    .pagination-page(
      v-for="n in range",
      :key="n",
      :class="{ active: n == current }",
      @click="n == current ? null : onClick(n)"
    ) {{ n }}
    
    template(v-if="!range.includes(totalPaginationCount)")
      .pagination-dots
        SIcon(name="more_horiz")
      .pagination-last(
        :class="{ disable: current == totalPaginationCount }",
        @click="onClick(totalPaginationCount)"
      ) {{ totalPaginationCount }}
    .pagination-next(
      :class="{ disable: current == totalPaginationCount }",
      @click="onClick(current + 1)"
    )
      SIcon(name="chevron_right")
  .pagination-loading(v-show="loading")
</template>

<script>
import SIcon from '../SIcon/index.vue'
export default {
    model: {
        prop: "current",
        event: "change",
    },
    props: {
        current: {
            type: Number,
            default: 1,
        },
        total: {
            type: Number,
            default: 1,
        },
        size: {
            type: Number,
            default: 10,
        },
        length: {
            type: Number,
            default: 5
        },
        loading: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        totalPaginationCount() {
            return Math.ceil(this.total / this.size);
        },
        range() {
            const r = Math.ceil(parseInt(this.length / 2));
            if (this.totalPaginationCount <= this.length) {
                return this.getRange(1, this.totalPaginationCount);
            }
            if (this.current <= r) {
                return this.getRange(1, this.length);
            }
            else if (this.current + r >= this.totalPaginationCount) {
                return this.getRange(this.totalPaginationCount - this.length + 1, this.totalPaginationCount);
            }
            else {
                return this.getRange(this.current - r + (this.length % 2 ? 0 : 1), this.current + r);
            }
        },
    },
    methods: {
        onClick(n) {
            this.$emit("change", n);
        },
        getRange(start, end) {
            const arr = []; 
            if (typeof start == "number" && typeof end == "number") {
                for (let index = start; index <= end; index++) {
                    arr.push(index);
                }
            }
            return arr;
        },
    },
    components: { SIcon }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
