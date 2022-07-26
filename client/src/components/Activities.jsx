import { useDispatch, useSelector } from "react-redux";
import { getActivities } from "../actions";
import { useEffect } from "react";
import ActivityCard from "./activityCard/ActivityCard";

function Activities() {
  const activities = useSelector((state) => state.activities);
  console.log("soy Activities", activities);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);
  return (
    <div>
      <div>
        <button>New Activity</button>
        <button>Modify Activity</button>
        <button>Delete Activity</button>
      </div>
      <div>
        {activities.length ? (
          <h3>Tourist Activities</h3>
        ) : (
          <h3>Activities not found</h3>
        )}
      </div>
      <div>
        {activities &&
          activities.map((act) => <ActivityCard dataActivity={act} />)}
      </div>
    </div>
  );
}

export default Activities;
