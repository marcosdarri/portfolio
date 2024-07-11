import Image from "next/image";

const SocialMediaIcon = ({ src, alt, link }) => {
  return (
    <a href={link} target="_blank">
      <Image src={src} alt={alt} width={24} height={24} />
    </a>
  );
};

export default SocialMediaIcon;
