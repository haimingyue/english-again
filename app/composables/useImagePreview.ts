export interface PreviewImage {
  src: string;
  alt: string;
  title: string;
  caption?: string;
}
export function useImagePreview() {
  const image = useState<PreviewImage | null>("image-preview", () => null);
  function openImage(value: PreviewImage) {
    image.value = value;
  }
  function closeImage() {
    image.value = null;
  }
  return { image, openImage, closeImage };
}
