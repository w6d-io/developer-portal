import React from "react";
import { TopBarTitle, NavLink } from "@duik/it";
import { orderReleasesByDate } from "../../utils";

function OwnNavLink({ leftElement, title, rightElement }) {
  return (
    <div className="ownnavlink_container">
      <img
        layout="fill"
        alt={title}
        className="ownnavlink_container_img"
        src={leftElement}
      />
      <p className="ownnavlink_container_title">{title}</p>
      <p className="ownnavlink_container_span">{rightElement}</p>
    </div>
  );
}

function Categories({ posts, changeValue, ...props }) {
  const getCategories = [];
  posts.map((post) => {
    getCategories.push(post.frontmatter.category);
  });
  const sortedArr = getCategories.reduce(function (acc, curr) {
    return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
  }, {});

  const structuredArr = Object.entries(sortedArr).map(([key, value]) => {
    return {
      title: key,
      count: value,
    };
  });

  return (
    <div {...props}>
      <TopBarTitle className="categories_container_title">
        Categories
      </TopBarTitle>
      <NavLink
        className="categories_container_item"
        onClick={() => changeValue("All")}
      >
        All
      </NavLink>
      {structuredArr.map((post, index) => {
        return (
          <NavLink
            key={index}
            rightEl={post.count}
            className="categories_container_item"
            onClick={() => changeValue(post.title)}
          >
            {post.title}
          </NavLink>
        );
      })}
    </div>
  );
}

function LatestReleases({ posts, ...props }) {
  const getReleases = [];
  posts.map((post) => {
    getReleases.push(post.frontmatter);
  });
  getReleases.sort(orderReleasesByDate);

  return (
    <div {...props}>
      <TopBarTitle className="categories_container_title">
        Latest Releases
      </TopBarTitle>
      {getReleases.map((release, index) => {
        return (
          <OwnNavLink
            key={index}
            leftElement={release.post_logo}
            title={release.app}
            rightElement={release.type}
          />
        );
      })}
    </div>
  );
}

export default function BlogCategories({ posts, changeValue }) {
  return (
    <div className="flex flex-col lg:flex-col justify-around p-5 lg:p-0 md:flex-row sm:flex-col">
      <Categories
        className="categories_container m-0 flex-grow md:mr-2 lg:m-0"
        posts={posts}
        changeValue={changeValue}
      />
      <LatestReleases
        className="categories_container m-0 flex-grow md:ml-2 lg:m-0 lg:mt-5"
        posts={posts}
      />
    </div>
  );
}
