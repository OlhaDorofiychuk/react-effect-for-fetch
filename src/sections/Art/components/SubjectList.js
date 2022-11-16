function SubjectList(props) {
  // props: art
  return (
    <ul>
      <li>Century of Progress</li>
      <li>men</li>
      <li>portraits</li>
      <li>{props.art.term_titles[0]}</li>
      <li>{props.art.term_titles[1]}</li>
    </ul>
  );
}

export default SubjectList;
