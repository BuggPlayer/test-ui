import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const CategoryList = ({ data }: any) => {
  return (
    <div className={styles.container}>
      {/* <h1 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4">
        Popular Categories
      </h1> */}
      <div className={styles.categories}>
        {data?.map((item: any) => (
          <Link
            href={`/?cat=${item.title}`}
            className={`${styles.category} ${styles.fashion}`}
            key={item._id}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
