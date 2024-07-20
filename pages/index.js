// pages/gallery.js
import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import styles from '../styles/Gallery.module.css';

export async function getStaticProps() {
  const imagesDir = path.join(process.cwd(), 'public', 'images');
  const filenames = fs.readdirSync(imagesDir);

  const images = filenames.map((filename) => ({
    name: filename,
    path: `/images/${filename}`,
  }));

  return {
    props: {
      images,
    },
  };
}

export default function Gallery({ images }) {
  return (
    <div className={styles.gallery}>
      {images.map((image) => (
        <div key={image.name} className={styles.imageContainer}>
          <Image
            src={image.path}
            alt={image.name}
            fill
            style={{ objectFit: 'cover' }}
            placeholder="blur"
            blurDataURL={`/_next/image?url=${image.path}&w=16&q=1`}
          />
        </div>
      ))}
    </div>
  );
}
