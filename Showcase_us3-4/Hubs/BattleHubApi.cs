using Microsoft.AspNetCore.SignalR;
//using System.Web;

namespace Showcase_us3_4.Hubs
{
    public class BattleHubApi : Hub
    {

        public async Task SendMessage(string user, string choice)
        {
            await Clients.All.SendAsync("SendMessage", user, choice);
        }

        //public async Task JoinLobby(string groupName)
        //{
        //    await Groups.AddToGroupAsync(Context.ConnectionId, groupName);
        //}
        //public async Task SendBattleInfoToLobby(string groupName, string user, string message)
        //{
        //    await Clients.Group(groupName).SendAsync("ReceiveMessage", user, message);
        //}
    }
}
