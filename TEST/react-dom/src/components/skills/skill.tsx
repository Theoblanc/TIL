import { useEffect, useState } from "react";
import { SkillsProps } from "./skill.type";

export const Skills = (props: SkillsProps) => {
  const { skills } = props;
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLogin(true);
    }, 500);
  }, []);
  return (
    <>
      <ul>
        {skills.map((skill, index) => {
          return <li key={index}>{skill}</li>;
        })}
      </ul>
      {isLogin ? (
        <button>Start learning</button>
      ) : (
        <button onClick={() => setIsLogin(true)}>login</button>
      )}
    </>
  );
};
