  document.addEventListener('DOMContentLoaded', (event) => {
    try {
      // Get the JSON data from the <script> tag
      const jsonData = document.getElementById('ng-state').textContent;
      console.log('Raw JSON data:', jsonData);

      // Parse the JSON data
      const data = JSON.parse(jsonData);
      console.log('Parsed JSON data:', data);

      // Extract the campaignId
      const userCampaigns = data['api-cache.state']['USER_CAMPAIGNS'];
      console.log('User campaigns:', userCampaigns);

      for (const key in userCampaigns) {
        if (userCampaigns.hasOwnProperty(key)) {
          console.log('Campaign key:', key);
          const campaignId = key.replace(/["\[\]]/g, '').split(',')[0];
          console.log('Extracted campaignId:', campaignId);
          document.body.classList.add(campaignId);
          console.log('Added class to body:', campaignId);
        }
      }
    } catch (error) {
      console.error('Error processing JSON data:', error);
    }
  });
