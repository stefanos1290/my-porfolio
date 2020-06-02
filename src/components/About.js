import React from "react";
import "./about.css";

const About = () => {
  const myName = "StefanosOxinos";
  const openBracket = "{";
  const closeBracket = "}";
  const firstComment = "// I'm ambitous and love new challenges :)";
  const secondComment = "// My varierty of skills is continuously expanding.";
  const parenthesis = "()";
  const constructorThis = "this";
  const dot = ".";
  const thisName = "'Stefanos Oxinos'";
  const thisEmail = "'stefanostrr@hotmail.com'";
  const openSquareBracket = "[";
  const closeSquareBracket = "]";
  const startingDots = "··";
  const mySkills1 = [
    "Javascript/Es6",
    "HTML",
    "CSS",
    "React",
    "Redux",
    "Vue",
    "jQuery",
  ];
  const mySkills2 = [
    "Handlebars",
    "Node",
    "Express",
    "PostgreSQL",
    "Material-UI",
    "Git/GitHub",
  ];
  const exprerienceDate = "'09.2019 - 12.2019'";
  const expreriencePlace = "'SPICED Academy'";

  return (
    <div className="about-container">
      <div className="text-container">
        <div className="classStart">
          <span className="num">01</span>
          class{" "}
          <span className="nameStartFunction">
            {myName}
            <span className="openBracket"> {openBracket}</span>
          </span>
        </div>
        <div>
          <span className="num">02</span>
          <span className="startingDots">{startingDots}</span>
          <span className="firstComment">{firstComment}</span>
        </div>
        <div>
          <span className="num">03</span>
          <span className="startingDots">{startingDots}</span>
          <span className="secondComment">{secondComment}</span>
        </div>
        <div>
          <span className="num">04</span>
          <span className="startingDots">{startingDots}</span>
          <span className="constructor">constructor</span>
          <span className="parenthesis"> {parenthesis}</span>
          <span className="openBracket"> {openBracket}</span>
        </div>
        <div>
          <span className="num">05</span>
          <span className="startingDots">{startingDots}</span>
          <span className="startingDots">{startingDots}</span>
          <span className="constructorThis">{constructorThis}</span>
          <span className="dot">{dot}</span>
          <span className="thisName">name</span>
          <span className="equal"> = </span>
          <span className="thisString">{thisName}</span>
          <span className="semicolon">;</span>
        </div>
        <div>
          <span className="num">06</span>
          <span className="startingDots">{startingDots}</span>
          <span className="startingDots">{startingDots}</span>
          <span className="constructorThis">{constructorThis}</span>
          <span className="dot">{dot}</span>
          <span className="thisBirthday">dayOfBirthTimestamp</span>
          <span className="equal"> = </span>
          <span className="thisNumber">834364800</span>
          <span className="semicolon">;</span>
        </div>
        <div>
          <span className="num">07</span>
          <span className="startingDots">{startingDots}</span>
          <span className="startingDots">{startingDots}</span>
          <span className="constructorThis">{constructorThis}</span>
          <span className="dot">{dot}</span>
          <span className="thisEmail">email</span>
          <span className="equal"> = </span>
          <span className="email">{thisEmail}</span>
          <span className="semicolon">;</span>
        </div>
        <div>
          <span className="num">08</span>
          <span className="startingDots">{startingDots}</span>
          <span className="functionSkills">skills</span>
          <span className="parenthesis">{parenthesis}</span>
          <span className="openBracket"> {openBracket}</span>
        </div>
        <div>
          <span className="num">09</span>
          <span className="startingDots">{startingDots}</span>
          <span className="startingDots">{startingDots}</span>
          <span className="return">return</span>
          <span className="openSquareBracket"> {openSquareBracket}</span>
          {mySkills1.map((x) => {
            return <span className="mySkills">{x}, </span>;
          })}{" "}
          <br />
          <span className="num">10</span>
          <span className="startingDots">{startingDots}</span>
          <span className="startingDots">{startingDots}</span>
          {mySkills2.map((x) => {
            return <span className="mySkills">{x}, </span>;
          })}
          <span className="closeSquareBracket">{closeSquareBracket}</span>
        </div>
        <div>
          <span className="num">11</span>
          <span className="startingDots">{startingDots}</span>
          <span className="closeBracket">{closeBracket}</span>
        </div>
        <div>
          <span className="num">12</span>
          <span className="startingDots">{startingDots}</span>
          <span className="exprerience">exprerience</span>
          <span className="parenthesis">{parenthesis}</span>
          <span className="openBracket"> {openBracket}</span>
        </div>
        <div>
          <span className="num">13</span>
          <span className="startingDots">{startingDots}</span>
          <span className="startingDots">{startingDots}</span>
          <span className="return">return</span>
          <span className="openSquareBracket"> {openSquareBracket}</span>
          <span className="openBracket"> {openBracket}</span>
          <span className="exprerienceDate">{exprerienceDate}</span>
          <span className="colon"> : </span>
          <span className="expreriencePlace">{expreriencePlace}</span>
          <span className="closeBracket">{closeBracket}</span>
          <span className="closeSquareBracket">{closeSquareBracket}</span>
          <span className="semicolon">;</span>
        </div>
        <div>
          <span className="num">14</span>
          <span className="startingDots">{startingDots}</span>
          <span className="startingDots">{startingDots}</span>
          <span className="closeBracket">{closeBracket}</span>
        </div>
        <div>
          <span className="num">15</span>
          <span className="closeBracket">{closeBracket}</span>
        </div>
        <div>
          <span className="num">16</span>
          <span className="callFunction">{myName}</span>
          <span className="parenthesis">{parenthesis}</span>
          <span className="semicolon">;</span>
        </div>
      </div>
    </div>
  );
};

export default About;
