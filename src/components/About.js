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
          <span id="num3931px" className="num">
            03
          </span>
          <span className="startingDots">{startingDots}</span>
          <span className="secondComment">{secondComment}</span>
        </div>
        <div>
          <span id="num41055px" className="num">
            04
          </span>
          <span className="startingDots">{startingDots}</span>
          <span className="constructor">constructor</span>
          <span className="parenthesis"> {parenthesis}</span>
          <span className="openBracket"> {openBracket}</span>
        </div>
        <div>
          <span id="num51055px" className="num">
            05
          </span>
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
          <span id="num61055px" className="num">
            06
          </span>
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
          <span id="num71055px" className="num">
            07
          </span>
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
          <span id="num81055px" className="num">
            08
          </span>
          <span className="startingDots">{startingDots}</span>
          <span className="functionSkills">skills</span>
          <span className="parenthesis">{parenthesis}</span>
          <span className="openBracket"> {openBracket}</span>
        </div>
        <div>
          <span id="num91055px" className="num">
            09
          </span>
          <span className="startingDots">{startingDots}</span>
          <span className="startingDots">{startingDots}</span>
          <span className="return">return</span>
          <span className="openSquareBracket"> {openSquareBracket}</span>
          {mySkills1.map((x) => {
            return <span className="mySkills">{x}, </span>;
          })}{" "}
          <br />
          <span id="num101403px" className="num">
            10
          </span>
          <span className="startingDots">{startingDots}</span>
          <span className="startingDots">{startingDots}</span>
          {mySkills2.map((x) => {
            return <span className="mySkills">{x}, </span>;
          })}
          <span className="num1475px">11</span>
          <span className="startingDots1475px">{startingDots}</span>
          <span className="startingDots825px">{startingDots}</span>
          <span className="startingDots825px">{startingDots}</span>
          <span className="closeSquareBracket">{closeSquareBracket}</span>
        </div>
        <div>
          <span id="first11" className="num">
            11
          </span>
          <span className="num121475px">12</span>
          <span className="startingDots">{startingDots}</span>
          <span className="closeBracket">{closeBracket}</span>
        </div>
        <div>
          <span id="first12" className="num">
            12
          </span>
          <span className="num131475px">13</span>
          <span className="startingDots">{startingDots}</span>
          <span className="exprerience">exprerience</span>
          <span className="parenthesis">{parenthesis}</span>
          <span className="openBracket"> {openBracket}</span>
        </div>
        <div>
          <span id="first13" className="num">
            13
          </span>
          <span className="num141475px">14</span>
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
          <span id="first14" className="num">
            14
          </span>
          <span className="num151475px">15</span>
          <span className="startingDots">{startingDots}</span>
          <span className="startingDots">{startingDots}</span>
          <span className="closeBracket">{closeBracket}</span>
        </div>
        <div>
          <span id="first15" className="num">
            15
          </span>
          <span className="num161475px">16</span>
          <span className="startingDots1403">{startingDots}</span>
          <span className="closeBracket">{closeBracket}</span>
        </div>
        <div>
          <span id="first16" className="num">
            16
          </span>
          <span className="num171475px">17</span>
          <span className="num181403px">18</span>
          <span className="num191403px">19</span>
          <span className="num201055px">20</span>
          <span className="num21931px">21</span>
          <span className="num22930px">22</span>
          <span className="num23896px">23</span>
          <span className="num24825px">24</span>
          <span className="num25727px">25</span>
          <span className="num26720px">26</span>
          <span className="num27672px">27</span>
          <span className="callFunction">{myName}</span>
          <span className="parenthesis">{parenthesis}</span>
          <span className="semicolon">;</span>
        </div>
      </div>
    </div>
  );
};

export default About;
