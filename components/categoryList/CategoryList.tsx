import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const CategoryList = ({data}:any) => {
    
  return (
    <div className={styles.container}>
    <h1 className={styles.title}>Popular Categories</h1>
    <div className={styles.categories}>
      {
        // console.log("data" ,data)
      }
      {data?.map((item:any) => (
        <Link
          href={`/blog?cat=${item.title}`}
          className={`${styles.category} ${styles.fashion}`}
          key={item._id}
        >
          {/* {item.img && (
            <Image
              src={item.img}
              alt=""
              width={32}
              height={32}
              className={styles.image}
            />
          )} */}
          {item.title}
        </Link>
      ))}
    </div>
  </div>
  )
}

export default CategoryList
