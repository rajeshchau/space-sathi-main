import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const conversations = [
  { id: 1, name: "Priya Sharma", shop: "Corner Shop, Navrangpura", lastMsg: "Is the shop still available?", time: "2h ago", unread: 2, avatar: "PS" },
  { id: 2, name: "Amit Kumar", shop: "Mall Shop, Phoenix Mall", lastMsg: "Can I schedule a visit tomorrow?", time: "5h ago", unread: 0, avatar: "AK" },
  { id: 3, name: "Neha Gupta", shop: "Corner Shop, Navrangpura", lastMsg: "What's the lease duration?", time: "1d ago", unread: 1, avatar: "NG" },
  { id: 4, name: "Rahul Joshi", shop: "Market Shop, MG Road", lastMsg: "Thank you for the details.", time: "2d ago", unread: 0, avatar: "RJ" },
  { id: 5, name: "Deepak Verma", shop: "Spacious Ground Floor Shop", lastMsg: "Is parking available nearby?", time: "3d ago", unread: 0, avatar: "DV" },
];

const chatMessages = [
  { id: 1, sender: "them", text: "Hi, I'm interested in your Corner Shop in Navrangpura. Is it still available?", time: "10:30 AM" },
  { id: 2, sender: "me", text: "Yes, it's still available! Would you like to schedule a visit?", time: "10:45 AM" },
  { id: 3, sender: "them", text: "That would be great. Is the shop main road facing?", time: "11:00 AM" },
  { id: 4, sender: "me", text: "Yes, it's on the main road with excellent visibility and footfall. Ground floor with parking available.", time: "11:05 AM" },
  { id: 5, sender: "them", text: "Perfect! What's the security deposit?", time: "11:20 AM" },
  { id: 6, sender: "me", text: "Security deposit is 2 months rent (₹50,000). Rent is negotiable for long-term lease.", time: "11:25 AM" },
  { id: 7, sender: "them", text: "Is the shop still available?", time: "2:00 PM" },
];

const DashboardMessages = () => {
  const [selectedChat, setSelectedChat] = useState(1);
  const [message, setMessage] = useState("");

  const selectedConv = conversations.find((c) => c.id === selectedChat);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-heading font-bold text-foreground">Messages</h2>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card rounded-2xl shadow-card overflow-hidden flex h-[calc(100vh-200px)] min-h-[500px]"
      >
        {/* Conversation list */}
        <div className="w-80 border-r border-border flex flex-col flex-shrink-0 hidden sm:flex">
          <div className="p-3 border-b border-border">
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/50 border border-border">
              <Search className="w-4 h-4 text-muted-foreground" />
              <input type="text" placeholder="Search messages..." className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none" />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {conversations.map((conv) => (
              <button
                key={conv.id}
                onClick={() => setSelectedChat(conv.id)}
                className={`w-full flex items-start gap-3 p-3 text-left transition-colors ${
                  selectedChat === conv.id ? "bg-primary/5" : "hover:bg-muted/50"
                }`}
              >
                <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-primary-foreground">{conv.avatar}</span>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-foreground truncate">{conv.name}</p>
                    <span className="text-xs text-muted-foreground">{conv.time}</span>
                  </div>
                  <p className="text-xs text-muted-foreground truncate">{conv.shop}</p>
                  <p className="text-xs text-muted-foreground truncate mt-0.5">{conv.lastMsg}</p>
                </div>
                {conv.unread > 0 && (
                  <span className="w-5 h-5 rounded-full bg-secondary text-secondary-foreground text-xs font-bold flex items-center justify-center flex-shrink-0 mt-1">
                    {conv.unread}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Chat area */}
        <div className="flex-1 flex flex-col">
          {/* Chat header */}
          <div className="p-4 border-b border-border flex items-center gap-3">
            <div className="w-9 h-9 rounded-full gradient-primary flex items-center justify-center">
              <span className="text-xs font-bold text-primary-foreground">{selectedConv?.avatar}</span>
            </div>
            <div>
              <p className="font-medium text-sm text-foreground">{selectedConv?.name}</p>
              <p className="text-xs text-muted-foreground">{selectedConv?.shop}</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {chatMessages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[75%] rounded-2xl px-4 py-2.5 ${
                  msg.sender === "me"
                    ? "gradient-primary text-primary-foreground rounded-br-md"
                    : "bg-muted text-foreground rounded-bl-md"
                }`}>
                  <p className="text-sm">{msg.text}</p>
                  <p className={`text-xs mt-1 ${msg.sender === "me" ? "text-primary-foreground/60" : "text-muted-foreground"}`}>{msg.time}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Message input */}
          <div className="p-4 border-t border-border">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
              <Button variant="cta" size="icon" className="rounded-xl flex-shrink-0">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DashboardMessages;
