export function useAudioPlayer() {
  const audio = shallowRef<HTMLAudioElement>();
  const playing = ref(false);
  const status = ref("点击播放，听一遍");
  let request = 0;
  function stop() {
    request++;
    audio.value?.pause();
    playing.value = false;
  }
  async function play(src: string) {
    stop();
    const token = request;
    const player = audio.value ?? new Audio();
    audio.value = player;
    player.onended = () => {
      playing.value = false;
      status.value = "点击可以再听一遍";
    };
    player.onpause = () => {
      playing.value = false;
    };
    player.onerror = () => {
      playing.value = false;
      status.value = "音频暂时无法播放，请重试或下载卡组。";
    };
    player.src = src;
    player.currentTime = 0;
    status.value = "正在加载音频…";
    try {
      await player.play();
      if (token !== request) return false;
      playing.value = true;
      status.value = "正在播放…";
      return true;
    } catch {
      if (token === request)
        status.value = "音频暂时无法播放，请重试或下载卡组。";
      return false;
    }
  }
  onBeforeUnmount(() => {
    stop();
    if (audio.value) {
      audio.value.removeAttribute("src");
      audio.value.load();
    }
  });
  return { playing, status, play, stop };
}
