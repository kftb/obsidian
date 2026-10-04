This file contains Self-hosted LiveSync settings as YAML.
Except for the `livesync-setting` code block, we can add a note for free.

If the name of this file matches the value of the "settingSyncFile" setting inside the `livesync-setting` block, LiveSync will tell us whenever the settings change. We can decide to accept or decline the remote setting. (In other words, we can back up this file by renaming it to another name).

We can perform a command in this file.
- `Parse setting file` : load the setting from the file.

**Note** Please handle it with all of your care if you have configured to write credentials in.


````yaml:livesync-setting
remoteType: ""
useCustomRequestHandler: false
couchDB_URI: https://obsidian-ls.sf.kftb.dev
couchDB_DBNAME: kftb_main
liveSync: true
syncOnSave: false
syncOnStart: false
savingDelay: 200
lessInformationInLog: false
gcDelay: 0
versionUpFlash: ""
minimumChunkSize: 20
longLineThreshold: 250
showVerboseLog: false
suspendFileWatching: false
trashInsteadDelete: true
periodicReplication: false
periodicReplicationInterval: 60
syncOnFileOpen: false
encrypt: true
usePathObfuscation: true
doNotDeleteFolder: false
resolveConflictsByNewerFile: false
batchSave: false
batchSaveMinimumDelay: 5
batchSaveMaximumDelay: 60
deviceAndVaultName: ""
usePluginSettings: false
showOwnPlugins: false
showStatusOnEditor: true
showStatusOnStatusbar: true
showOnlyIconsOnEditor: false
hideFileWarningNotice: false
networkWarningStyle: ""
usePluginSync: false
autoSweepPlugins: false
autoSweepPluginsPeriodic: false
notifyPluginOrSettingUpdated: false
checkIntegrityOnSave: false
batch_size: 50
batches_limit: 50
useHistory: true
disableRequestURI: true
skipOlderFilesOnSync: true
checkConflictOnlyOnOpen: false
showMergeDialogOnlyOnActive: false
syncInternalFiles: true
syncInternalFilesBeforeReplication: false
syncInternalFilesIgnorePatterns: \/node_modules\/, \/\.git\/, \/obsidian-livesync\/
syncInternalFilesTargetPatterns: ""
syncInternalFilesInterval: 60
ignoreVersionCheck: false
lastReadUpdates: 25
deleteMetadataOfDeletedFiles: false
syncIgnoreRegEx: ""
syncOnlyRegEx: ""
customChunkSize: 60
readChunksOnline: true
watchInternalFileChanges: true
automaticallyDeleteMetadataOfDeletedFiles: 0
disableMarkdownAutoMerge: false
writeDocumentsIfConflicted: false
useDynamicIterationCount: false
syncAfterMerge: false
configPassphraseStore: ""
permitEmptyPassphrase: false
remoteConfigurations:
  legacy-couchdb:
    id: legacy-couchdb
    name: CouchDB Remote
    uri: sls+https://kftb:jhq_FMCwve4mnf1faw@obsidian-ls.sf.kftb.dev/?db=kftb_main
    isEncrypted: false
activeConfigurationId: legacy-couchdb
P2P_ActiveRemoteConfigurationId: ""
useIndexedDBAdapter: true
useTimeouts: false
writeLogToTheFile: false
doNotPaceReplication: false
hashCacheMaxCount: 300
hashCacheMaxAmount: 50
concurrencyOfReadChunksOnline: 100
minimumIntervalOfReadChunksOnline: 100
hashAlg: xxhash64
suspendParseReplicationResult: false
doNotSuspendOnFetching: false
useIgnoreFiles: false
ignoreFiles: .gitignore
syncOnEditorSave: false
pluginSyncExtendedSetting: {}
syncMaxSizeInMB: 50
settingSyncFile: windows.md
writeCredentialsForSettingSync: false
notifyAllSettingSyncFile: false
isConfigured: true
settingVersion: 10
enableCompression: false
accessKey: ""
bucket: ""
endpoint: ""
region: auto
secretKey: ""
useEden: false
maxChunksInEden: 10
maxTotalLengthInEden: 1024
maxAgeInEden: 10
disableCheckingConfigMismatch: false
displayLanguage: def
enableChunkSplitterV2: false
disableWorkerForGeneratingChunks: false
processSmallFilesInUIThread: false
notifyThresholdOfRemoteStorageSize: 4803
usePluginSyncV2: true
usePluginEtc: false
handleFilenameCaseSensitive: false
doNotUseFixedRevisionForChunks: true
showLongerLogInsideEditor: false
sendChunksBulk: false
sendChunksBulkMaxSize: 1
useSegmenter: false
useAdvancedMode: true
usePowerUserMode: false
useEdgeCaseMode: false
enableDebugTools: false
suppressNotifyHiddenFilesChange: false
syncMinimumInterval: 2000
P2P_Enabled: false
P2P_AutoAccepting: 0
P2P_AppID: self-hosted-livesync
P2P_roomID: ""
P2P_passphrase: ""
P2P_relays: wss://exp-relay.vrtmrz.net/
P2P_AutoBroadcast: false
P2P_AutoStart: false
P2P_AutoSyncPeers: ""
P2P_AutoWatchPeers: ""
P2P_SyncOnReplication: ""
P2P_RebuildFrom: ""
P2P_AutoAcceptingPeers: ""
P2P_AutoDenyingPeers: ""
P2P_IsHeadless: false
P2P_DevicePeerName: ""
P2P_turnServers: ""
P2P_turnUsername: ""
P2P_turnCredential: ""
P2P_useDiagRTC: false
doctorProcessedVersion: 0.24.30
useJWT: false
jwtAlgorithm: ""
jwtExpDuration: 5
useRequestAPI: false
bucketPrefix: ""
chunkSplitterVersion: v3-rabin-karp
E2EEAlgorithm: v2
processSizeMismatchedFiles: false
forcePathStyle: true
syncInternalFileOverwritePatterns: ""
useOnlyLocalChunk: false
maxMTimeForReflectEvents: 0
configPassphrase: ""
preset: ""
syncMode: ONEVENTS
dummy: 0

````