import React, {FC, PropsWithChildren, useEffect, useState} from 'react';
import {IObjMovie} from "../../interfaces/movie";
import {useSearchParams} from "react-router-dom";
import {moviesService} from "../../services/moviesService";
import css from "../MoviesComponent/Movies.module.css";
import {Movie} from "../MoviesComponent/Movie";

interface IProps extends PropsWithChildren {
    search: IObjMovie;
    page: string,
}

const SearchMovies: FC<IProps> = ({search, page}) => {
    let [query, setQuery] = useSearchParams({page: '1'});


    const prev =()=> {
        setQuery(prev1 => {
            prev1.set('page', `${+query.get('page') - 1}`);
            return prev1;
        })
    }
    const next =()=> {
        setQuery(prev1 => {
            prev1.set('page', `${+query.get('page') + 1}`);
            return prev1;
        })
    }
    return (
        <div className={css.Movies}>
            {search.results && search.results.map((value, index) => <Movie page={page} key={index} movie={value}/>)}
            <div>
                <button onClick={prev} disabled={page === '1'}>prev</button>
                <button onClick={next}>next</button>
            </div>
        </div>
    );
};

export {SearchMovies};