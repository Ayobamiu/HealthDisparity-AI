import ChatComponent from "../Components/ChatComponent";
import { ThreadEnum } from "../Data/types";

function ChatWithBotScreen() {
  return (
    <div className="max-w-3xl md:h-[90vh] h-[80vh] mx-auto flex-col">
      <div className="border flex-grow h-full">
        <ChatComponent type={ThreadEnum.GENERAL} />
      </div>
    </div>
  );
}

export default ChatWithBotScreen;
