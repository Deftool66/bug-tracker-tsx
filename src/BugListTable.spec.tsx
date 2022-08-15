import { render, fireEvent, screen } from "@testing-library/react";
import { BugPriority, IBug } from "./IBug";
import BugListTable from "./BugListTable";

test('the bug table should display a list of bugs',()=>{
  const BugList: IBug[]=[
    {id:'1234',description:'A test bug', priority:BugPriority.LOW},
    {id:'2345',description:'Another test bug', priority: BugPriority.MEDIUM},
    {id:'6789',description:'A test bug', priority: BugPriority.HIGH},
    {id:'9123',description:'A test bug', priority: BugPriority.LOW},
  ];
  render(<BugListTable bugs={BugList} onDeleteBug={()=>{}}/>);
  const rows = screen.getAllByRole('row');
  for (let index = 1; index < rows.length; index += 1)
  {expect (rows[index]).toHaveTextContent(BugList[index-1].description);
  }
});
