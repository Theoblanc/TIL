import { FC } from "react";

export const Appilcation: FC = () => {
  return (
    <>
      <h1>Job application form</h1>
      <h2>section1</h2>
      <span title="close">X</span>
      <p>all fields are mandatory</p>
      <div>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="fullName"
              onChange={() => {}}
              defaultValue={"theo"}
            />
          </div>
          <div>
            <label htmlFor="bio">Bio</label>
            <textarea id="bio"></textarea>
          </div>
          <div>
            <label>Job location</label>
            <select>
              <option value="">Select a country</option>
              <option value="US">United Status</option>
              <option value="CA">Canada</option>
              <option value="ID">India</option>
              <option value="KR">Korea</option>
            </select>
          </div>
          <div>
            <label htmlFor="term">
              <input type="checkbox" id="term" />I agreed to the terms and
              conditions
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};
