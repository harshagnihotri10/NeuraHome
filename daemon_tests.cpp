#include <gtest/gtest.h>
#include <queue>
#include <string>

extern std::queue<std::string> cmd_queue;
extern void netlink_event_listener();
extern void state_machine_handler();

TEST(DaemonTest, NetlinkEventListenerTest) {
    netlink_event_listener();
    ASSERT_EQ(cmd_queue.front(), "netlink_event_detected");
}

TEST(DaemonTest, StateMachineHandlerTest) {
    cmd_queue.push("netlink_event_detected");
    state_machine_handler();
    ASSERT_EQ(cmd_queue.empty(), true);
}

int main(int argc, char **argv) {
    ::testing::InitGoogleTest(&argc, argv);
    return RUN_ALL_TESTS();
}
