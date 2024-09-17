'use client'

import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";

export default function GoogleReviews() {
  // Create a free Featurable account at https://featurable.com
  // Then create a new Featurable widget and copy the widget ID
  const featurableWidgetId = "f21f72ff-dd90-4ea6-a7ff-55ab0ae9137c";

  return (
    <ReactGoogleReviews layout="carousel" featurableId={featurableWidgetId} />
  );
}    
    

  