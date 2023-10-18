import React from "react";
import useFetch from "../../hooks/useFetch";
import styles from "./CityList.module.css"; 

const CityList = () => {
    const {data, loading, error} = useFetch("/flights/countByCity?cities=Berlin,Madrid,London,Paris,Monaco")

    const images = [
        "https://media.istockphoto.com/id/503874284/photo/berlin-skyline-with-spree-river-at-sunset-germany.jpg?s=612x612&w=0&k=20&c=gnrw-SQQq9Niao93SU4djAgGXi-5LRBNkSRiwwX96Tk=",
        "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFkcmlkfGVufDB8fDB8fHww&w=1000&q=80",
        "https://thumbs.dreamstime.com/b/big-ben-london-autumn-leaves-32915756.jpg",
        "https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900",
        "https://lp-cms-production.imgix.net/2023-02/GettyImages-686005142.jpeg",
      ];

  return (
    <div className={styles.pList}> 
      {loading ? (
        "loading"
      ) : (
        <>
          {data &&
            images.map((img, i) => (
              <div className={styles.pListItem} key={i}>
                <img src={img} alt="" className={styles.pListImg} /> 
                <div className={styles.pListTitles}> 
                  <h1>{data[i]?.type}</h1>
                  <h2>
                  {data[i]?.city} - {data[i]?.count} 
                  </h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default CityList;