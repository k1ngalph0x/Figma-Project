import { useState } from "react";
import CustomButton from "./components/CustomButton";

const Home = () => {
  const [isCheckedAll, setIsCheckedAll] = useState(false);
  const [isCheckedPages, setIsCheckedPages] = useState({
    page1: false,
    page2: false,
    page3: false,
    page4: false,
  });

  const handleAllPagesChange = (event) => {
    const { checked } = event.target;
    setIsCheckedAll(checked);
    setIsCheckedPages({
      page1: checked,
      page2: checked,
      page3: checked,
      page4: checked,
    });
  };

  const handlePageChange = (event) => {
    const { name, checked } = event.target;
    setIsCheckedPages((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
    if (!checked) {
      setIsCheckedAll(false);
    } else {
      const allChecked = Object.values(isCheckedPages).every((value) => value);
      setIsCheckedAll(allChecked);
    }
  };
  const handleDivClick = (pageName) => {
    setIsCheckedPages((prevState) => ({
      ...prevState,
      [pageName]: !prevState[pageName],
    }));

    const allPagesChecked = Object.values(isCheckedPages).every(
      (value) => value
    );
    setIsCheckedAll(allPagesChecked);
  };

  const handleAllPagesDivClick = () => {
    const newCheckedState = !isCheckedAll;
    setIsCheckedAll(newCheckedState);
    setIsCheckedPages({
      page1: newCheckedState,
      page2: newCheckedState,
      page3: newCheckedState,
      page4: newCheckedState,
    });
  };
  return (
    <div className="h-screen flex justify-center items-center border">
      <div className="w-[370px] h-[326px] p-6 rounded-md shadow-lg border">
        <div className="flex flex-col space-y-3">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={handleAllPagesDivClick}
          >
            <label className="text-slate-700 ">All Pages</label>
            <input
              type="checkbox"
              className="h-[25px] w-[25px]"
              checked={isCheckedAll}
              onChange={handleAllPagesChange}
            />
          </div>
          <hr className="w-370px h-20px gap-[10px]" />
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => handleDivClick("page1")}
          >
            <label className="text-slate-700">Page 1</label>
            <input
              type="checkbox"
              className="h-[25px] w-[25px]"
              name="page1"
              checked={isCheckedPages.page1}
              onChange={handlePageChange}
            />
          </div>
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => handleDivClick("page2")}
          >
            <label className="text-slate-700">Page 2</label>
            <input
              type="checkbox"
              className="h-[25px] w-[25px]"
              name="page2"
              checked={isCheckedPages.page2}
              onChange={handlePageChange}
            />
          </div>
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => handleDivClick("page3")}
          >
            <label className="text-slate-700">Page 3</label>
            <input
              type="checkbox"
              className="h-[25px] w-[25px]"
              name="page3"
              checked={isCheckedPages.page3}
              onChange={handlePageChange}
            />
          </div>
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => handleDivClick("page4")}
          >
            <label className="text-slate-700">Page 4</label>
            <input
              type="checkbox"
              className="h-[25px] w-[25px]"
              name="page4"
              checked={isCheckedPages.page4}
              onChange={handlePageChange}
            />
          </div>
          <hr className="gap-[10px]" />
          <div className="max-w-[340px] h-[40px] mt-[10px] mb-[10px]">
            <CustomButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
