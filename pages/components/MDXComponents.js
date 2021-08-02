import Image from 'next/image';

const NextImg = (props) => {
  const { src, alt } = props;
  return (
    <Image
      src={require(`${src}`)}
      alt={alt}
    />
  );
};

const MDXComponents = {
  NextImg
};

export default MDXComponents;