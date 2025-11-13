const theme = require("../../theme");

// GitLens Colors
// https://github.com/gitkraken/vscode-gitlens/blob/main/src/theme.ts

module.exports = {
  "gitlens.closedAutolinkedIssueIconColor": theme.magenta,
  "gitlens.closedPullRequestIconColor": theme.red,
  "gitlens.mergedPullRequestIconColor": theme.magenta,
  "gitlens.openAutolinkedIssueIconColor": theme.green,
  "gitlens.openPullRequestIconColor": theme.green,
  "gitlens.unpublishedChangesIconColor": theme.green,
  "gitlens.unpublishedCommitIconColor": theme.green,
  "gitlens.unpulledChangesIconColor": theme.orange,

  "gitlens.decorations.addedForegroundColor": theme.green,
  "gitlens.decorations.branchAheadForegroundColor": theme.green,
  "gitlens.decorations.branchBehindForegroundColor": theme.orange,
  "gitlens.decorations.branchDivergedForegroundColor": theme.yellow,
  "gitlens.decorations.branchMissingUpstreamForegroundColor": theme.red,
  "gitlens.decorations.branchUnpublishedForegroundColor": theme.ash,
  "gitlens.decorations.branchUpToDateForegroundColor": theme.ash,
  "gitlens.decorations.copiedForegroundColor": theme.cyan,
  "gitlens.decorations.deletedForegroundColor": theme.red,
  "gitlens.decorations.ignoredForegroundColor": theme.ash[700],
  "gitlens.decorations.modifiedForegroundColor": theme.blue,
  "gitlens.decorations.renamedForegroundColor": theme.cyan,
  "gitlens.decorations.statusMergingOrRebasingConflictForegroundColor": theme.red,
  "gitlens.decorations.statusMergingOrRebasingForegroundColor": theme.yellow,
  "gitlens.decorations.untrackedForegroundColor": theme.green,
  "gitlens.decorations.workspaceCurrentForegroundColor": theme.green,
  "gitlens.decorations.workspaceRepoMissingForegroundColor": theme.ash[700],
  "gitlens.decorations.workspaceRepoOpenForegroundColor": theme.green,
  "gitlens.decorations.worktreeHasUncommittedChangesForegroundColor": theme.yellow,
  "gitlens.decorations.worktreeMissingForegroundColor": theme.red,

  "gitlens.graphChangesColumnAddedColor": theme.green,
  "gitlens.graphChangesColumnDeletedColor": theme.red,

  "gitlens.graphLane1Color": theme.blue,
  "gitlens.graphLane2Color": theme.cyan,
  "gitlens.graphLane3Color": theme.magenta,
  "gitlens.graphLane4Color": theme.magenta,
  "gitlens.graphLane5Color": theme.red,
  "gitlens.graphLane6Color": theme.red,
  "gitlens.graphLane7Color": theme.orange,
  "gitlens.graphLane8Color": theme.yellow,
  "gitlens.graphLane9Color": theme.green,
  "gitlens.graphLane10Color": theme.cyan,

  "gitlens.graphMinimapMarkerHeadColor": theme.green,
  "gitlens.graphMinimapMarkerHighlightsColor": theme.yellow,
  "gitlens.graphMinimapMarkerLocalBranchesColor": theme.blue,
  "gitlens.graphMinimapMarkerPullRequestsColor": theme.orange,
  "gitlens.graphMinimapMarkerRemoteBranchesColor": theme.cyan,
  "gitlens.graphMinimapMarkerStashesColor": theme.magenta,
  "gitlens.graphMinimapMarkerTagsColor": theme.yellow,
  "gitlens.graphMinimapMarkerUpstreamColor": theme.green,

  "gitlens.graphScrollMarkerHeadColor": theme.green,
  "gitlens.graphScrollMarkerHighlightsColor": theme.yellow,
  "gitlens.graphScrollMarkerLocalBranchesColor": theme.blue,
  "gitlens.graphScrollMarkerPullRequestsColor": theme.orange,
  "gitlens.graphScrollMarkerRemoteBranchesColor": theme.cyan,
  "gitlens.graphScrollMarkerStashesColor": theme.magenta,
  "gitlens.graphScrollMarkerTagsColor": theme.yellow,
  "gitlens.graphScrollMarkerUpstreamColor": theme.green,

  "gitlens.gutterBackgroundColor": theme.slate,
  "gitlens.gutterForegroundColor": theme.ash[700],
  "gitlens.gutterUncommittedForegroundColor": theme.cyan,

  "gitlens.launchpadIndicatorAttentionColor": theme.yellow,
  "gitlens.launchpadIndicatorAttentionHoverColor": theme.yellow,
  "gitlens.launchpadIndicatorBlockedColor": theme.red,
  "gitlens.launchpadIndicatorBlockedHoverColor": theme.red,
  "gitlens.launchpadIndicatorMergeableColor": theme.green,
  "gitlens.launchpadIndicatorMergeableHoverColor": theme.green,

  "gitlens.lineHighlightBackgroundColor": theme.cyan[900][30],
  "gitlens.lineHighlightOverviewRulerColor": theme.cyan,

  "gitlens.trailingLineBackgroundColor": theme.slate[700],
  "gitlens.trailingLineForegroundColor": theme.ash[700],
};

