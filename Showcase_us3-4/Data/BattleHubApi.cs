using Microsoft.AspNetCore.SignalR;

namespace Showcase_us3_4.Data
{
    public class BattleHubApi :Hub
    {
        //public async Task SendBattleInfo(string user, string choice) 
        //{
        //    await Clients.All.SendAsync("RecieveMessage", user, choice);
        //}

        public async Task JoinLobby(string groupName)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, groupName);
        }
        public async Task SendBattleInfoToLobby(string groupName, string user, string message)
        {
            await Clients.Group(groupName).SendAsync("ReceiveMessage", user, message);
        }
    }
}
