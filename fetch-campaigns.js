  document.addEventListener('DOMContentLoaded', (event) => {
    // Get the JSON data from the <script> tag
    const jsonData = document.getElementById('ng-state').textContent;
    const data = JSON.parse(jsonData);

    // Extract the campaignId
    const userCampaigns = data['api-cache.state']['USER_CAMPAIGNS'];
    for (const key in userCampaigns) {
      if (userCampaigns.hasOwnProperty(key)) {
        const campaignId = key.replace(/["\[\]]/g, '').split(',')[0];
        document.body.classList.add(campaignId);
      }
    }
  });
