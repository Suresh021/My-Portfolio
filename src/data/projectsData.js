import project1 from "../assets/images/Projects/project1.jpg";
import project2 from "../assets/images/Projects/project2.jpg";
import project3 from "../assets/images/Projects/project3.jpg";

export const projects = [
  {
    image: project1,
    title: "Regional Labor Market Analysis Dashboard",
    category: "Data Science",
    description:
      "Power BI dashboard analyzing 100K+ labor records to identify unemployment trends and regional workforce patterns.",
    tech: ["Power BI", "Power Query", "DAX"],
    live: "https://app.powerbi.com/view?r=eyJrIjoiMTM4NmU1M2MtZTUxYy00ZGZiLTkyOTctMDlkOTI2NzhmMmI5IiwidCI6ImUxNGU3M2ViLTUyNTEtNDM4OC04ZDY3LThmOWYyZTJkNWE0NiIsImMiOjEwfQ%3D%3D"
  },
  {
    image: project2,
    title: "Global Income Inequality Analysis Platform",
    category: "Data Science",
    description:
      "Data analytics platform analyzing income inequality across 189 countries with interactive Power BI dashboards and a Streamlit web app.",
    tech: ["Power BI", "Python", "Streamlit", "AI/ML"],
    code: "https://github.com/Suresh021/Income-inequality-analysis-dashboard-explorer.git",
    live: "https://income-inequality-analysis-dashboard-explorer-vkzf6d23tfdcwxms.streamlit.app/"
  },
  {
    image: project3,
    title: "Employee Salary Prediction",
    category: "Data Science",
    description:
      "Machine learning model predicting whether an employee earns over 50K using the Adult Income dataset, deployed via Streamlit for single and batch predictions.",
    tech: ["Python", "Streamlit", "AI/ML"],
    code: "https://github.com/Suresh021/Employee-Salary-Prediction.git",
  },
];