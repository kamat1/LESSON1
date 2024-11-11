import { farcasterHubContext } from "frames.js/middleware";
import { createFrames, Button } from "frames.js/next";
import { appURL } from "app/utils";

const frames = createFrames({
  basePath: '/frames',
  middleware: [
    farcasterHubContext({
      // remove if you aren't using @frames.js/debugger or you just don't want to use the debugger hub
      ...(process.env.NODE_ENV === "production"
        ? {}
        : {
            hubHttpUrl: "http://localhost:3010/hub",
          }),
    }),
  ],
});

const handleRequest = frames(async (ctx) => {
  return {
    image:  `${appURL()}/1146-2.jpg` ,
    imageOptions: {
      aspectRatio: "1:1",
    }, 
    buttons: [
      <Button action="post" target="/">
      FREAK!!!!
    </Button>
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;