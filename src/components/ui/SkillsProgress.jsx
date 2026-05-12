import {Skill, TitleHeader} from "./index";
import {Grid} from "@mui/material";
import {SelfImprovementRounded} from "@mui/icons-material";
import {devSkills} from "../../constants";
import {useEffect, useState} from "react";


const SkillsProgress = () => {
  const {htmlSkill, nodeSkill, gitSkill, pythonSkill, reactSkill, golangSkill, javascriptSkill, postgresSkill, tailwindSkill, typescriptSkill} = devSkills;

  const [node, setNode] = useState(0);
  const [html, setHtml] = useState(0);
  const [git, setGit] = useState(0);
  const [python, setPython] = useState(0);
  const [react, setReact] = useState(0);
  const [golang, setGolang] = useState(0);
  const [javascript, setJavascript] = useState(0);
  const [postgres, setPostgres] = useState(0);
  const [tailwind, setTailwind] = useState(0);
  const [typescript, setTypescript] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setNode(oldProgress => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, nodeSkill.value);
      });

      setHtml(oldProgress => {
        const diff = Math.min(Math.random() * 10, 4);
        return Math.min(oldProgress + diff, htmlSkill.value);
      });

      setGit(oldProgress => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, gitSkill.value);
      });

      setReact(oldProgress => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, reactSkill.value);
      });

      setPython(oldProgress => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, pythonSkill.value);
      });

      setGolang(oldProgress => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, golangSkill.value);
      });

      setTailwind(oldProgress => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, tailwindSkill.value);
      });

      setJavascript(oldProgress => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, javascriptSkill.value);
      });

      setTypescript(oldProgress => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, typescriptSkill.value);
      });

      setPostgres(oldProgress => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, postgresSkill.value);
      });
    }, 100);
    return () => clearInterval(timer);
  });


  return (
      <Grid container>
        <Grid sx={{width: 1, mt: 1}}>
          <TitleHeader color={"success"} icon={<SelfImprovementRounded/>}>مهارت های من</TitleHeader>

          <Skill name={nodeSkill.name} icon={nodeSkill.icon} color={nodeSkill.color} value={node}/>
          <Skill name={pythonSkill.name} icon={pythonSkill.icon} color={pythonSkill.color} value={python}/>
          <Skill name={gitSkill.name} icon={gitSkill.icon} color={gitSkill.color} value={git}/>
          <Skill name={postgresSkill.name} icon={postgresSkill.icon} color={postgresSkill.color} value={postgres}/>
          <Skill name={javascriptSkill.name} icon={javascriptSkill.icon} color={javascriptSkill.color} value={javascript}/>
          <Skill name={typescriptSkill.name} icon={typescriptSkill.icon} color={typescriptSkill.color} value={typescript}/>
          <Skill name={htmlSkill.name} icon={htmlSkill.icon} color={htmlSkill.color} value={html}/>
          <Skill name={reactSkill.name} icon={reactSkill.icon} color={reactSkill.color} value={react}/>
          <Skill name={tailwindSkill.name} icon={tailwindSkill.icon} color={tailwindSkill.color} value={tailwind}/>
          <Skill name={golangSkill.name} icon={golangSkill.icon} color={golangSkill.color} value={golang}/>

        </Grid>
      </Grid>
  );
};

export default SkillsProgress;