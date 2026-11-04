<script setup lang="ts">
import { communityGroups } from "~/data/resources";
const { openImage } = useImagePreview();
</script>

<template>
  <section
    id="community"
    class="border-t border-line bg-[#eeeade] py-14 sm:py-20"
    aria-labelledby="community-title"
  >
    <div class="page-shell">
      <div class="mb-9 flex flex-wrap items-end justify-between gap-5">
        <div>
          <p class="mb-3 text-xs font-semibold tracking-[.14em] text-forest">
            和同路人，一起往前走
          </p>
          <h2 id="community-title" class="text-3xl font-bold sm:text-[40px]">
            自学，也可以有伙伴。
          </h2>
        </div>
        <p class="max-w-sm text-sm leading-[1.9] text-muted">
          微信扫码加入你感兴趣的群。<br />手机上可点开放大，保存图片后在微信识别。
        </p>
      </div>
      <div class="grid gap-5 md:grid-cols-3">
        <article
          v-for="(group, index) in communityGroups"
          :key="group.image"
          class="min-w-0 border border-line bg-paper p-6 lg:p-8"
        >
          <div
            class="mb-5 flex items-center justify-between gap-3 text-xs font-semibold text-forest"
          >
            <span>{{ group.tag }}</span
            ><span aria-hidden="true" class="text-muted">0{{ index + 1 }}</span>
          </div>
          <h3 class="text-[22px] font-bold">{{ group.name }}</h3>
          <p class="mt-3 min-h-12 text-sm leading-[1.8] text-muted">
            {{ group.description }}
          </p>
          <button
            type="button"
            :aria-label="`放大查看${group.name}群二维码`"
            class="mx-auto mt-6 block w-full max-w-[260px] cursor-zoom-in bg-white p-3"
            @click="
              openImage({
                src: group.image,
                alt: `${group.name}微信群二维码`,
                title: group.name,
                caption: '原图标注：11 月 1 日前有效。请在有效期内扫码。',
              })
            "
          >
            <span class="qr-window block aspect-square overflow-hidden relative"
              ><img
                :src="group.image"
                :alt="`${group.name}微信群二维码`"
                width="1080"
                height="1596"
                loading="lazy"
                decoding="async"
                class="qr-source"
            /></span>
          </button>
          <div
            class="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-muted"
          >
            <span>11 月 1 日前有效</span
            ><button
              type="button"
              class="min-h-11 font-semibold text-forest underline underline-offset-4"
              @click="
                openImage({
                  src: group.image,
                  alt: `${group.name}微信群二维码`,
                  title: group.name,
                  caption: '原图标注：11 月 1 日前有效。请在有效期内扫码。',
                })
              "
            >
              查看完整二维码 ↗
            </button>
          </div>
        </article>
      </div>
      <p class="mt-6 text-xs leading-[1.8] text-muted">
        二维码有有效期；如无法加入，请先确认二维码是否过期或群是否已满。
      </p>
    </div>
  </section>
</template>

<style scoped>
/* Show the QR and its white margin; the preview retains the supplied full image. */
.qr-source {
  position: absolute;
  width: 125.582%;
  max-width: none;
  height: auto;
  left: -12.791%;
  top: -59.186%;
}
</style>
