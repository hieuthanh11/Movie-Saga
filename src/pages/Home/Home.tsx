import React, { useEffect } from "react";
import MyImage from "../../assets/images/29264.png";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { getMovieRequest } from "../../redux/actions/movie/action";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { pending, movieList, error } = useSelector((state: RootState) => {
    return state.movieReducer;
  });

  // console.log(movieList, "movieList");

  useEffect(() => {
    dispatch(getMovieRequest());
  }, [dispatch]);

  return (
    <div>
      <p>Hello world</p>
      <img src={MyImage} alt={MyImage} width={50} height={50} />
      <div>
        {pending ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error</div>
        ) : (
          movieList.map((item: any, index: number) => {
            return (
              <div key={index}>
                <p>Tên phim:{item.biDanh}</p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Home;
